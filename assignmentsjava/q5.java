class q5{
	public static void main(String[] args) {
		int num1=Integer.parseInt(args[0]);
		int num2=Integer.parseInt(args[1]);
		int num3=Integer.parseInt(args[2]);
		// System.out.println(num1);
		// System.out.println(num2);
		// System.out.println(num3);

		int sum=num1+num2+num3;
		boolean f=true;
		if(num1<40)
			f=false;
		if(num2<40)
			f=false;
		if(num3<40)
			f=false;
		if(sum<125)
			f=false;

		if(f==true)
			System.out.println("PASSING");
		if(f==false)
			System.out.println("FAILING");
			
		

		
		}

}