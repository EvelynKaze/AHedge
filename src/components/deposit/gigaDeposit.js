import { toast } from 'react-toastify';

export async function depositGiga({ 
  supabase, 
  deposit_giga, 
  user, 
  setLoading, 
  setOpenGiga,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_giga,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenGiga(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
