-- Enable RLS
alter table public.profiles enable row level security;
alter table public.submissions enable row level security;

-- Helper: is_admin
create or replace function public.is_admin(uid uuid)
returns boolean
language sql
stable
as $$
  select exists(select 1 from public.profiles p where p.id = uid and p.role = 'admin')
$$;

-- Profiles policies
drop policy if exists "Profile owner can read self" on public.profiles;
create policy "Profile owner can read self" on public.profiles
for select using (auth.uid() = id or public.is_admin(auth.uid()));

drop policy if exists "Admin can update profiles" on public.profiles;
create policy "Admin can update profiles" on public.profiles
for update using (public.is_admin(auth.uid()));

-- Submissions policies
drop policy if exists "Users insert own submissions" on public.submissions;
create policy "Users insert own submissions" on public.submissions
for insert with check (auth.uid() = user_id);

drop policy if exists "Owner or Admin can read" on public.submissions;
create policy "Owner or Admin can read" on public.submissions
for select using (auth.uid() = user_id or public.is_admin(auth.uid()));

drop policy if exists "Owner can update own draft" on public.submissions;
create policy "Owner can update own draft" on public.submissions
for update using (auth.uid() = user_id);

drop policy if exists "Admin can update all" on public.submissions;
create policy "Admin can update all" on public.submissions
for update using (public.is_admin(auth.uid()));
