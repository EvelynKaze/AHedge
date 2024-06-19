import { toast } from 'react-toastify';

export async function depositBNB({ 
  supabase, 
  deposit_bnb, 
  user, 
  setLoading, 
  setOpenBNB,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_bnb,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenBNB(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
