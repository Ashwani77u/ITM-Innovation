import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qyyfgfjzpncjzmyrtwny.supabase.co";
const supabaseKey = "sb_publishable_iV7WeD7G86FoJLhVwO2nvQ_f7S9j2Xo";

export const supabase = createClient(supabaseUrl, supabaseKey);