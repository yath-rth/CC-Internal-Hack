import { supabase } from 'supabaseClient';

export async function getUserSession() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}