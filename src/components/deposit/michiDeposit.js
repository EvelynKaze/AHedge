import { toast } from 'react-toastify';

export async function depositMichi({ 
  supabase, 
  deposit_michi, 
  user, 
  setLoading, 
  setOpenMichi,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_michi,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenMichi(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
