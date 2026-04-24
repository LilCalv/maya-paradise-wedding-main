
CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  attending TEXT NOT NULL CHECK (attending IN ('yes','no')),
  events TEXT[] NOT NULL DEFAULT '{}',
  dietary_restrictions TEXT,
  song_request TEXT,
  comments TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

-- Anyone (anon) can submit an RSVP
CREATE POLICY "Anyone can submit RSVP"
  ON public.rsvps
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(full_name) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 3 AND 320
    AND attending IN ('yes','no')
  );

-- No one can read RSVPs publicly (admin will read via dashboard)
-- (no SELECT policy = no access)
