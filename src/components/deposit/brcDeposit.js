import { toast } from 'react-toastify';

export async function depositBRC({ 
  supabase, 
  deposit_brc, 
  user, 
  setLoading, 
  setOpenBRC,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_brc,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenBRC(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
