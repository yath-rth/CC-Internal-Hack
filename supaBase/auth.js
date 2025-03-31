async function signUp(email, password) {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) console.error(error);
    return user;
  }
  
async function signIn(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) console.error(error);
    return user;
}

async function getUserDetails() {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', (await supabase.auth.getUser()).data.user.id);
    if (error) console.error(error);
    return data[0];
}