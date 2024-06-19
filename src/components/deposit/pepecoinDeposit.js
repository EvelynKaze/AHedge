import { toast } from 'react-toastify';

export async function depositPepeCoin({ 
  supabase, 
  deposit_pepecoin, 
  user, 
  setLoading, 
  setOpenPepeCoin,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_pepecoin,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenPepeCoin(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
