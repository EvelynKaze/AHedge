import { toast } from 'react-toastify';

export async function depositFriend({ 
  supabase, 
  deposit_friend, 
  user, 
  setLoading, 
  setOpenFriend,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_friend,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenFriend(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
