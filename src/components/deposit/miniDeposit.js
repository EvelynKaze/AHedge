import { toast } from 'react-toastify';

export async function depositMini({ 
  supabase, 
  deposit_mini, 
  user, 
  setLoading, 
  setOpenMini,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_mini,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenMini(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
