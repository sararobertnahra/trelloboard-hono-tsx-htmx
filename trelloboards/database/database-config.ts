import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = "https://malmhmbtzhyasmppciyh.supabase.co"

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hbG1obWJ0emh5YXNtcHBjaXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxMjcyMjUsImV4cCI6MjAwOTcwMzIyNX0.HLUPa8-boKQjzC27iHeORGf_0KBG_6Uh1g7FMRXwHDc'

const options = {
    //     schema: "public",
    //     headers: { "x-my-custom-header": "my-app-name" },
    //     autoRefreshToken: true,
    //      persistSession: true,
    //     detectSessionInUrl: true,
};

export const dbconnection = createClient(SUPABASE_URL, SUPABASE_KEY);

export class Board {
    constructor(created_at: string, id: number, name: string | null) {
        this.created_at = created_at;
        this.id = id;
        this.name = name;
    }
    created_at: string
    id: number
    name: string | null
  }
  
  export class Item {
    constructor(created_at: string, id: number, list_id: number | null, message: string | null) {
        this.created_at = created_at;
        this.id = id;
        this.list_id = list_id;
        this.message = message;
    }
    created_at: string
    id: number
    list_id: number | null
    message: string | null
  }
  
  export class List {
    constructor(board_id: number | null, created_at: string, id: number, name: string | null) {
        this.board_id = board_id;
        this.created_at = created_at;
        this.id = id;
        this.name = name;
    }
    board_id: number | null
    created_at: string
    id: number
    name: string | null
  }
