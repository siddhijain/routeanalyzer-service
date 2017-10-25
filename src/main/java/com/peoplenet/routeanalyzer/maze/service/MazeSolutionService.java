/**
 * 
 */
package com.peoplenet.routeanalyzer.maze.service;

import com.peoplenet.routeanalyzer.maze.model.MazeSolutionRequest;
import com.peoplenet.routeanalyzer.maze.model.MazeSolutionResponse;

/**
 * @author sjain
 * @param <V>
 *
 */
public interface MazeSolutionService {
	
	public MazeSolutionResponse getShortestPath(MazeSolutionRequest request);

}