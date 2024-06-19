import { toast } from 'react-toastify';

export async function depositGME({ 
  supabase, 
  deposit_gme, 
  user, 
  setLoading, 
  setOpenGME,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user,
      deposit_gme,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenGME(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
