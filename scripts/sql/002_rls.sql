alter table public.submissions enable row level security;

create policy "insert_public" on public.submissions
for insert to anon, authenticated with check (true);

create policy "select_all_auth" on public.submissions
for select to authenticated using (true);

create policy "update_all_auth" on public.submissions
for update to authenticated using (true);
