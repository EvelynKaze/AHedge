import { toast } from 'react-toastify';

export async function depositWif({ 
  supabase, 
  deposit_wif, 
  user, 
  setLoading, 
  setOpenWif,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_wif,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenWif(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
