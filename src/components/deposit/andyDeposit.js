import { toast } from 'react-toastify';

export async function depositAndy({ 
  supabase, 
  deposit_andy, 
  user, 
  setLoading, 
  setOpenAndy,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_andy,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenAndy(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
