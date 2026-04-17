-- Island Pro Consulting — Admin Portal Setup
-- Run this in your Supabase dashboard: SQL Editor → New Query
-- Paste ALL of this and click "Run"

-- Drop existing tables to start fresh (safe to run multiple times)
DROP TABLE IF EXISTS outreach_emails CASCADE;
DROP TABLE IF EXISTS outreach_logs CASCADE;
DROP TABLE IF EXISTS businesses CASCADE;

-- 1. Businesses table (prospect CRM)
CREATE TABLE businesses (
  id               UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name             TEXT        NOT NULL,
  email            TEXT,
  phone            TEXT,
  type             TEXT        DEFAULT 'accommodation',
  location         TEXT,
  website_url      TEXT,
  website_status   TEXT        DEFAULT 'unknown',
  priority         TEXT        DEFAULT 'high',
  outreach_status  TEXT        DEFAULT 'pending',
  notes            TEXT,
  created_at       TIMESTAMPTZ DEFAULT NOW(),
  updated_at       TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Outreach emails log (for open tracking)
CREATE TABLE outreach_emails (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id     UUID        REFERENCES businesses(id) ON DELETE CASCADE,
  status          TEXT        DEFAULT 'sent',
  sent_at         TIMESTAMPTZ DEFAULT NOW(),
  opened_at       TIMESTAMPTZ,
  opened_count    INTEGER     DEFAULT 0,
  tracking_token  TEXT        UNIQUE DEFAULT gen_random_uuid()::TEXT,
  subject         TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Disable RLS (auth is handled at app level via JWT cookie)
ALTER TABLE businesses      DISABLE ROW LEVEL SECURITY;
ALTER TABLE outreach_emails DISABLE ROW LEVEL SECURITY;

-- 4. Useful indexes
CREATE INDEX idx_businesses_outreach_status ON businesses(outreach_status);
CREATE INDEX idx_businesses_website_status  ON businesses(website_status);
CREATE INDEX idx_outreach_tracking_token    ON outreach_emails(tracking_token);
CREATE INDEX idx_outreach_business_id       ON outreach_emails(business_id);

-- Done! You can now import the Rodrigues list from the Admin Portal.
SELECT 'Setup complete! businesses and outreach_emails tables created.' AS result;
