import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://jbpeoveltjtlhkjxteyy.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpicGVvdmVsdGp0bGhranh0ZXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyNzU2MjEsImV4cCI6MjA5Njg1MTYyMX0.EcstVMHfHIYz54UPnwSEYY0DlG74eh0X53wuaOMZVnA'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
})

// Helper function to get authenticated user
export async function getAuthenticatedUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  return { user, error }
}

// Helper function to sign out
export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}