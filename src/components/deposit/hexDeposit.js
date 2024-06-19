import { toast } from 'react-toastify';

export async function depositHEX({ 
  supabase, 
  deposit_hex, 
  user, 
  setLoading, 
  setOpenHEX,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_hex,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenHEX(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
