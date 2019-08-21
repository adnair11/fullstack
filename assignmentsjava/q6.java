class q6
{
	public static void main(String[] args) {
		int dec=Integer.parseInt(args[0]);
		String s="";
		while(dec>0)
		{
			s=(dec%2)+s;
			dec/=2;
		}
		System.out.print(s);
	}
}