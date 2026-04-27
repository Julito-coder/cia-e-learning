CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'weekly-league-rotation') THEN
    PERFORM cron.schedule(
      'weekly-league-rotation',
      '5 22 * * 0',
      $cron$
      SELECT net.http_post(
        url:='https://ciflsfzlbpyffgtjtljz.supabase.co/functions/v1/weekly-league-rotation',
        headers:='{"Content-Type":"application/json","Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZmxzZnpsYnB5ZmZndGp0bGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MjAzNzcsImV4cCI6MjA5MDA5NjM3N30.UZt20-uF0MbSTSHi92mx6LdSV1-i8TT2hZlgDovMros"}'::jsonb,
        body:=concat('{"trigger":"cron","time":"', now(), '"}')::jsonb
      );
      $cron$
    );
  END IF;
END$$;