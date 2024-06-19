import { toast } from 'react-toastify';

export async function depositDjcat({ 
  supabase, 
  deposit_djcat, 
  user, 
  setLoading, 
  setOpenBTC,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_djcat,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenBTC(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
