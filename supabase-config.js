// Supabase-config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// URL limpa sem o /rest/v1/ do final
const supabaseUrl = 'https://usktbfleqrjjlwcrdkxt.supabase.co'

// Aqui você cola a sua chave longa ("anon public") que copiou da tela anterior (API Keys)
const supabaseKey = 'sb_publishable_DNEIFHBQjD0RhGxIEIDA3g_4NDbv8fp'

export const supabase = createClient(supabaseUrl, supabaseKey)