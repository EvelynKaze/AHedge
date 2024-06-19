import { toast } from 'react-toastify';

export async function depositSpeed({ 
  supabase, 
  deposit_speed, 
  user, 
  setLoading, 
  setOpenSpeed,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_speed,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenSpeed(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
