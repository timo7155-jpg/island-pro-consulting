-- Island Pro Consulting — Admin DB Migration
-- Run this in your Supabase dashboard → SQL Editor

-- ─────────────────────────────────────────────────────────────────────
-- 1. businesses table — new columns
-- ─────────────────────────────────────────────────────────────────────
ALTER TABLE businesses
  ADD COLUMN IF NOT EXISTS email_hook    text,
  ADD COLUMN IF NOT EXISTS email_subject text,
  ADD COLUMN IF NOT EXISTS email_angle   text,
  ADD COLUMN IF NOT EXISTS priority      integer DEFAULT 3,
  ADD COLUMN IF NOT EXISTS notes         text,
  ADD COLUMN IF NOT EXISTS click_count   integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS clicked_at    timestamptz;

-- Unique constraint on name so we can upsert
ALTER TABLE businesses
  DROP CONSTRAINT IF EXISTS businesses_name_key;
ALTER TABLE businesses
  ADD CONSTRAINT businesses_name_key UNIQUE (name);

-- ─────────────────────────────────────────────────────────────────────
-- 2. outreach_emails table — new columns
-- ─────────────────────────────────────────────────────────────────────
ALTER TABLE outreach_emails
  ADD COLUMN IF NOT EXISTS click_count  integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS clicked_at   timestamptz,
  ADD COLUMN IF NOT EXISTS link_clicked text;

-- ─────────────────────────────────────────────────────────────────────
-- Done — safe to run multiple times (IF NOT EXISTS / IF EXISTS guards)
-- ─────────────────────────────────────────────────────────────────────
