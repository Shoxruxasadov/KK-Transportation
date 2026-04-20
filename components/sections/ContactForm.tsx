"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  reason: z.string().min(1, "Please select a reason"),
  message: z.string().min(10, "Please share a bit more detail"),
});

type FormValues = z.infer<typeof schema>;

const REASONS = [
  "General inquiry",
  "Freight quote",
  "Driver application",
  "Carrier partnership",
  "Support",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-16 flex flex-col items-center text-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Check size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-dark">Message sent</h3>
            <p className="text-text-secondary max-w-sm">
              Thanks for reaching out. A member of our dispatch team will get
              back to you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <Field label="Full Name" error={errors.name?.message}>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your full name"
                className={inputClass}
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                  className={inputClass}
                />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+1"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Reason" error={errors.reason?.message}>
              <div className="relative">
                <select
                  {...register("reason")}
                  defaultValue=""
                  className={`${inputClass} pr-10 appearance-none`}
                >
                  <option value="" disabled>
                    Select a reason of contacting
                  </option>
                  {REASONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
                />
              </div>
            </Field>

            <Field label="Your message" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Enter your message"
                className={`${inputClass} resize-none`}
              />
            </Field>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full rounded-2xl bg-surface px-4 py-3.5 text-base text-dark placeholder:text-text-muted outline-none transition focus:ring-2 focus:ring-primary/30";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-base font-medium text-dark leading-[1.5]">
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  );
}
