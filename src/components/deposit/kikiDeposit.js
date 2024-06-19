import { toast } from 'react-toastify';

export async function depositKiki({ 
  supabase, 
  deposit_kiki, 
  user, 
  setLoading, 
  setOpenKiki,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_kiki,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenKiki(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
