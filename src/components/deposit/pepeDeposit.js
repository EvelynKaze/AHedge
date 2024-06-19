import { toast } from 'react-toastify';

export async function depositPepe({ 
  supabase, 
  deposit_pepe, 
  user, 
  setLoading, 
  setOpenPepe,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_pepe,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenPepe(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
