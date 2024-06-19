import { toast } from 'react-toastify';

export async function depositBONK({ 
  supabase, 
  deposit_bonk, 
  user, 
  setLoading, 
  setOpenBONK,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_bonk,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenBONK(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
