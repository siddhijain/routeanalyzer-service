/**
 * 
 */
package com.peoplenet.routeanalyzer.maze.model;

import java.io.Serializable;

/**
 * @author sjain
 *
 */
public class MazeSolutionResponse implements Serializable {
		/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
		
	private int numberOfSteps;
	private String shortestPath;
	private String errorMessage;
	
		public int getNumberOfSteps() {
			return numberOfSteps;
		}
		public void setNumberOfSteps(int numberOfSteps) {
			this.numberOfSteps = numberOfSteps;
		}
		public String getShortestPath() {
			return shortestPath;
		}
		public void setShortestPath(String shortestPath) {
			this.shortestPath = shortestPath;
		}
		public String getErrorMessage() {
			return errorMessage;
		}
		public void setErrorMessage(String errorMessage) {
			this.errorMessage = errorMessage;
		}
		
		
}
