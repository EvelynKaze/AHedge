import { toast } from 'react-toastify';

export async function depositHalt({ 
  supabase, 
  deposit_halt, 
  user, 
  setLoading, 
  setOpenHalt,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_halt,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenHalt(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
