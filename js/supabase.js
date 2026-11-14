
const SUPABASE_URL = "https://pkevokbmiwdynzhwirxh.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_15hjs0eRBwJTM-xKnW590g_E1SRSvOB";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

window.devVaultSupabase = supabaseClient;

console.log("DevVault Supabase connection initialized.");
