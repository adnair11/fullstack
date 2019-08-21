class q1{
	public static void main(String[] args) {
		int f=Integer.parseInt(args[0]);
		System.out.println(f);
		int fact=1;
		while(f>1)
		{
			fact*=f;
			f--;

		}
		System.out.println("The factorial is"+ fact);

	}
}