Run scripts in order:
1) 001_create_tables.sql
2) 002_rls_policies.sql

After you sign up/sign in once, set your user as admin by updating profiles.role = 'admin' for your user id. You can add a small SQL file (003_set_admin.sql) to do that once you know your auth uid.
