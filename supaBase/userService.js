export async function getUserDetails() {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', (await supabase.auth.getUser()).data.user.id)
      .single();
      
    if (error) console.error(error);
    return data;
  }