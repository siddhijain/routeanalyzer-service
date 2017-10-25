/**
 * 
 */
package com.peoplenet.routeanalyzer.maze.model;

import java.io.Serializable;

/**
 * @author sjain
 * @param <V>
 *
 */
public class MazeSolutionRequest implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
    private char[][] inputMaze;
//    private Node startNode;
    
//	private Node destinationNode;

	public char[][] getInputMaze() {
		return inputMaze;
	}

	public void setInputMaze(char[][] inputMaze) {
		this.inputMaze = inputMaze;
	}
	
/**	public Node getStartNode() {
		return startNode;
	}

	public void setStartNode(Node startNode) {
		this.startNode = startNode;
	}

	public Node getDestinationNode() {
		return destinationNode;
	}

	public void setDestinationNode(Node destinationNode) {
		this.destinationNode = destinationNode;
	} */
	
	
	
	
}