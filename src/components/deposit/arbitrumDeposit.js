import { toast } from 'react-toastify';

export async function depositARBITRUM({ 
  supabase, 
  deposit_arbitrum, 
  user, 
  setLoading, 
  setOpenARBITRUM,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_arbitrum,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenARBITRUM(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
