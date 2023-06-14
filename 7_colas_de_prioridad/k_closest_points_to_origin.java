import java.util.*;
import java.lang.Math;

class Main {
	public static void main(String[] args) {
		System.out.println("Hello world!");
		
		int[][] points = {{1, 3}, {3, 4}, {5, 6}};
		int K = 2;
		int[][] res = kClosest(points, K);
		for (int i = 0; i < res.length; i++) {
			System.out.print("[" + res[i][0] + ", " + res[i][1] + "], ");
		}
	}
	
	public static int[][] kClosest(int[][] points, int K) {
		if (K == points.length) {
			return points;
		}
		
		List<int[]> distances = new ArrayList<>();
		for (int i = 0; i < points.length; i++) {
			int[] point = points[i];
			int distance = (int) Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
			distances.add(new int[] {distance, point[0], point[1]});
		}
		
		Collections.sort(distances, (a, b) -> a[0] - b[0]);
		
		int[][] res = new int[K][2];
		for (int i = 0; i < K; i++) {
			int[] point = distances.get(i);
			res[i][0] = point[1];
			res[i][1] = point[2];
		}
		return res;
	}
}