import { useState } from "react";
import { motion } from "motion/react";
import SectionHeader from "../components/SectionHeader";
import Window from "../components/Window";
import { EMAIL, LINKS } from "../data/profile";

const channels = [
  { cmd: "mail", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { cmd: "open", label: "GitHub", value: "github.com/ryanwoo359", href: LINKS.github, external: true },
  { cmd: "open", label: "LinkedIn", value: "in/ryan-woo", href: LINKS.linkedin, external: true },
  { cmd: "get", label: "Resume", value: "Ryan_Woo_Resume.pdf", href: LINKS.resume, external: true },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No backend: hand the message off to the visitor's mail client.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <SectionHeader index={5} label="Contact" title="Let's Connect">
        Have a project, a role, or just want to talk tech? My inbox is open, so
        send a message and I'll get back to you.
      </SectionHeader>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Window title="channels.sh" bodyClassName="p-0">
            <ul>
              {channels.map((c, i) => (
                <li key={c.label} className={i ? "border-t-2 border-line" : ""}>
                  <a
                    href={c.href}
                    {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-accent hover:text-accent-ink"
                  >
                    <span className="w-12 shrink-0 font-mono text-xs text-accent-2 group-hover:text-accent-ink">
                      ${c.cmd}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-bold">{c.label}</span>
                      <span className="block truncate font-mono text-xs text-ink-muted group-hover:text-accent-ink/80">
                        {c.value}
                      </span>
                    </span>
                    <span aria-hidden="true" className="font-mono transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Window>
          <p className="mt-6 font-mono text-xs leading-relaxed text-ink-muted">
            <span className="text-accent">●</span> Based in San Francisco (PT) ·
            usually replies within a couple of days
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Window title="new_message.exe" meta={sent ? "handed off" : "draft"}>
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                    &gt; Name
                  </span>
                  <input
                    className="field"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Ada Lovelace"
                    value={form.name}
                    onChange={update}
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                    &gt; Email
                  </span>
                  <input
                    className="field"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="ada@engine.dev"
                    value={form.email}
                    onChange={update}
                  />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                  &gt; Message
                </span>
                <textarea
                  className="field min-h-40 resize-y"
                  name="message"
                  required
                  placeholder="Hi Ryan, I'd love to chat about…"
                  value={form.message}
                  onChange={update}
                />
              </label>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-xs text-ink-muted" aria-live="polite">
                  {sent ? "✓ Opened your mail app, just hit send." : "Opens in your email app."}
                </p>
                <button type="submit" className="btn btn-primary">
                  Transmit <span aria-hidden="true">▶</span>
                </button>
              </div>
            </form>
          </Window>
        </motion.div>
      </div>
    </div>
  );
}
