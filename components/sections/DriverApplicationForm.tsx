"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, Check } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone required"),
  cdlLicense: z.string().min(1, "Required"),
  yearsExperience: z
    .string()
    .min(1, "Required")
    .regex(/^\d+$/, "Digits only"),
  startDate: z.string().min(1, "Required"),
  hearAbout: z.string().min(1, "Required"),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const HEAR_ABOUT = [
  "Google search",
  "Social media",
  "Friend or family referral",
  "Job board",
  "Driver event",
  "Other",
];

export default function DriverApplicationForm() {
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
    <div className="w-full max-w-[720px] mx-auto bg-white rounded-2xl p-6 shadow-sm">
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
            <h3 className="text-2xl font-bold text-dark">Application sent</h3>
            <p className="text-text-secondary max-w-sm">
              Thanks for applying. Our recruiting team will get back to you
              within one business day.
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
            <FormSection title="Personal information">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="First name (Mandatory)"
                  error={errors.firstName?.message}
                >
                  <input
                    {...register("firstName")}
                    type="text"
                    placeholder="Enter your first name"
                    className={inputClass}
                  />
                </Field>
                <Field
                  label="Last name (Mandatory)"
                  error={errors.lastName?.message}
                >
                  <input
                    {...register("lastName")}
                    type="text"
                    placeholder="Enter your last name"
                    className={inputClass}
                  />
                </Field>
              </div>

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
            </FormSection>

            <FormSection title="CDL & Experience">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="CDL License number (Mandatory)"
                  error={errors.cdlLicense?.message}
                >
                  <input
                    {...register("cdlLicense")}
                    type="text"
                    placeholder="A1234567"
                    className={inputClass}
                  />
                </Field>
                <Field
                  label="Years of experience (Mandatory)"
                  error={errors.yearsExperience?.message}
                >
                  <input
                    {...register("yearsExperience")}
                    type="text"
                    inputMode="numeric"
                    placeholder="5"
                    className={inputClass}
                  />
                </Field>
              </div>
            </FormSection>

            <FormSection title="Availability & more">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Preferred start date (Mandatory)"
                  error={errors.startDate?.message}
                >
                  <div className="relative">
                    <input
                      {...register("startDate")}
                      type="date"
                      className={`${inputClass} pr-10`}
                    />
                    <Calendar
                      size={20}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                    />
                  </div>
                </Field>
                <Field
                  label="How did you hear about us? (Mandatory)"
                  error={errors.hearAbout?.message}
                >
                  <div className="relative">
                    <select
                      {...register("hearAbout")}
                      defaultValue=""
                      className={`${inputClass} pr-10 appearance-none`}
                    >
                      <option value="" disabled>
                        Select option
                      </option>
                      {HEAR_ABOUT.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={20}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                    />
                  </div>
                </Field>
              </div>

              <Field
                label="Additional information (Optional)"
                error={errors.additionalInfo?.message}
              >
                <textarea
                  {...register("additionalInfo")}
                  rows={4}
                  placeholder="Tell us more about yourself and work career"
                  className={`${inputClass} resize-none`}
                />
              </Field>
            </FormSection>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[10px] bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending…" : "Submit application"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full rounded-2xl bg-surface px-3.5 py-2.5 text-base text-dark placeholder:text-text-muted outline-none transition focus:ring-2 focus:ring-primary/30";

function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-dark leading-[1.78]">
        {title}
      </h3>
      {children}
    </section>
  );
}

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
