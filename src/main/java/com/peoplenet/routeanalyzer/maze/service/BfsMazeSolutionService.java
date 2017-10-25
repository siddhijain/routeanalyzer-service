/**
 * 
 */
package com.peoplenet.routeanalyzer.maze.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

import org.springframework.stereotype.Service;

import com.peoplenet.routeanalyzer.maze.model.MazeSolutionRequest;
import com.peoplenet.routeanalyzer.maze.model.MazeSolutionResponse;

/**
 * @author sjain162
 *
 */
@Service ("bfsMazeSolutionService")
public class BfsMazeSolutionService implements MazeSolutionService {
	
	private static int COLUMN_SIZE = 200;

	@Override
	public MazeSolutionResponse getShortestPath(MazeSolutionRequest request) {
		// TODO Auto-generated method stub
		
		char[][] inputMaze = request.getInputMaze();
		MazeSolutionResponse response = new MazeSolutionResponse();
		
		Point startNode = null;
		Point destinationNode = null;
		startNode = getStartNode(inputMaze);
		destinationNode = getDestinationNode(inputMaze);
				
		if(startNode == null || destinationNode == null){
			response.setErrorMessage("Invalid maze - either starting or destination node not specified");
			return response;
		}
		
		Queue<Point> queue = new LinkedList<Point>();
		queue.add(startNode);
				
		int[][] distances = new int[inputMaze.length][COLUMN_SIZE];
		String[][] pathTo = new String[inputMaze.length][COLUMN_SIZE];
		
		LinkedList<Point> shortestPath = new LinkedList<Point>();
		for(int[] row : distances)
			Arrays.fill(row, 0);
		distances[startNode.xPoint][startNode.yPoint]=0;
		pathTo[startNode.xPoint][startNode.yPoint]= startNode + "";
		while(!queue.isEmpty()){
			Point node = queue.poll();
			for (Point neighbor : node.getNeighbors(inputMaze,node.xPoint,node.yPoint,inputMaze[node.xPoint].length)){
					if(distances[neighbor.xPoint][neighbor.yPoint] == 0) {
						distances[neighbor.xPoint][neighbor.yPoint] = distances[node.xPoint][node.yPoint] + 1;
						queue.add(neighbor);
						pathTo[neighbor.xPoint][neighbor.yPoint] = pathTo[node.xPoint][node.yPoint] + neighbor + "";												
					}				
				}							
		}		
		
		if(distances[destinationNode.xPoint][destinationNode.yPoint]==0)
			response.setErrorMessage("No possible moves");
		else{
			response.setNumberOfSteps(distances[destinationNode.xPoint][destinationNode.yPoint]);
			response.setShortestPath(pathTo[destinationNode.xPoint][destinationNode.yPoint]);
		}	
	
		return response;
	}
	
	private Point getStartNode(char[][] maze){
		Point startNode = new Point();
		for(int xIndex = 0; xIndex < maze.length; xIndex++){
			for(int yIndex = 0; yIndex < maze[xIndex].length; yIndex++){
				if(maze[xIndex][yIndex]=='A'){
					startNode.xPoint = xIndex;
					startNode.yPoint = yIndex;
					return startNode;
				}
			}
				
			
		}
		return null;
		
		
	}
	
	private Point getDestinationNode(char[][] maze){
		Point endNode = new Point();		
		for(int xIndex = 0; xIndex < maze.length; xIndex++){
			for(int yIndex = 0; yIndex < maze[xIndex].length; yIndex++){
				if(maze[xIndex][yIndex]=='B'){
					endNode.xPoint = xIndex;
					endNode.yPoint = yIndex;
					return endNode;
				}
			}			
		}
		return null;		
	}
	
	
	
	private static class Point{
		int xPoint;
		int yPoint;
		
		public ArrayList<Point> getNeighbors(char[][] inputMaze,int xCoords,int yCoords,int allowedYCoords ){
			ArrayList<Point> neighbors = new ArrayList<Point>();
			Point temp;
			try{
				if((xCoords+1)<inputMaze.length && yCoords<inputMaze[xCoords+1].length && isValidNeighbor(inputMaze[xCoords+1][yCoords])){				
					temp = new Point();
					temp.xPoint=xCoords+1;
					temp.yPoint=yCoords;
					neighbors.add(temp);				
				}
				if((xCoords-1)>=0 && yCoords < inputMaze[xCoords-1].length && isValidNeighbor(inputMaze[xCoords-1][yCoords])){
					temp = new Point();
					temp.xPoint=xCoords-1;
					temp.yPoint=yCoords;
					neighbors.add(temp);
				}	
				if((yCoords+1)<allowedYCoords && isValidNeighbor(inputMaze[xCoords][yCoords+1])){
					temp = new Point();
					temp.xPoint=xCoords;
					temp.yPoint=yCoords+1;
					neighbors.add(temp);
				}
				if((yCoords-1)>=0 && isValidNeighbor(inputMaze[xCoords][yCoords-1])){
					temp = new Point();
					temp.xPoint=xCoords;
					temp.yPoint=yCoords-1;
					neighbors.add(temp);
				}
			
		} catch(ArrayIndexOutOfBoundsException e){
			
		}	
			return neighbors;
		}
		
		private boolean isValidNeighbor(char neighbor){
			if(neighbor!='#' && neighbor!='A')
				return true;
			else
				return false;
		}
		
		@Override
		public String toString(){
			   return "(" + this.xPoint + "," + this.yPoint + ")" + "->";
		}
		

		 
	}
	
	
	
	
}
