import { toast } from 'react-toastify';

export async function depositLichi({ 
  supabase, 
  deposit_lichi, 
  user, 
  setLoading, 
  setOpenLichi,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_lichi,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenLichi(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
