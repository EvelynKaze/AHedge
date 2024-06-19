import { toast } from 'react-toastify';

export async function depositReca({ 
  supabase, 
  deposit_reca, 
  user, 
  setLoading, 
  setOpenReca,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_reca,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenReca(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
