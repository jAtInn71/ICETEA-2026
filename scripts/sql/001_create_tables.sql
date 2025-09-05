create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  authors text not null,
  email text not null,
  track text not null,
  file_url text,
  status text not null default 'pending' check (status in ('pending','accepted','rejected')),
  created_at timestamptz not null default now()
);
