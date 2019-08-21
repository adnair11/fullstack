class q2
{
	public static void main(String[] args) {
		int first=0;
		int second=1;
		int sum=0;
		System.out.println(first);
		while(sum<=85)
		{
			System.out.println(sum);
			sum=first+second;
			first=second;
			second=sum;
		}
	}
}