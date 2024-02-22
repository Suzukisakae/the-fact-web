import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pptkrzkcraedhswrywqs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwdGtyemtjcmFlZGhzd3J5d3FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxNjMzNzAsImV4cCI6MjAyMzczOTM3MH0.yEvg27vWTyHhRDj9BygJHEfbKA9DtFGVl-859s-Jcm4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
