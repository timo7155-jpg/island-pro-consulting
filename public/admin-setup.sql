-- Island Pro Consulting — Admin Portal Setup
-- Run this in your Supabase dashboard: SQL Editor → New Query

-- 1. Businesses table (prospect CRM)
CREATE TABLE IF NOT EXISTS businesses (
  id               UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name             TEXT        NOT NULL,
  email            TEXT,
  phone            TEXT,
  type             TEXT        DEFAULT 'accommodation',
  location         TEXT,
  website_url      TEXT,
  website_status   TEXT        DEFAULT 'unknown',   -- none | booking_only | outdated | ok | good
  priority         TEXT        DEFAULT 'high',       -- high | medium | low
  outreach_status  TEXT        DEFAULT 'pending',    -- pending | sent | opened | replied | converted | skipped
  notes            TEXT,
  created_at       TIMESTAMPTZ DEFAULT NOW(),
  updated_at       TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Outreach emails log (for tracking history)
CREATE TABLE IF NOT EXISTS outreach_emails (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id     UUID        REFERENCES businesses(id) ON DELETE CASCADE,
  status          TEXT        DEFAULT 'sent',        -- sent | opened
  sent_at         TIMESTAMPTZ DEFAULT NOW(),
  opened_at       TIMESTAMPTZ,
  opened_count    INTEGER     DEFAULT 0,
  tracking_token  TEXT        UNIQUE DEFAULT gen_random_uuid()::TEXT,
  subject         TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Disable RLS (auth handled at app level via JWT)
ALTER TABLE businesses      DISABLE ROW LEVEL SECURITY;
ALTER TABLE outreach_emails DISABLE ROW LEVEL SECURITY;

-- 4. Useful indexes
CREATE INDEX IF NOT EXISTS idx_businesses_outreach_status ON businesses(outreach_status);
CREATE INDEX IF NOT EXISTS idx_businesses_website_status  ON businesses(website_status);
CREATE INDEX IF NOT EXISTS idx_outreach_tracking_token    ON outreach_emails(tracking_token);
CREATE INDEX IF NOT EXISTS idx_outreach_business_id       ON outreach_emails(business_id);

-- Done! You can now import the Rodrigues list from the Admin Portal.
