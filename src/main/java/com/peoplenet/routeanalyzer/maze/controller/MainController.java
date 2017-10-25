package com.peoplenet.routeanalyzer.maze.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.peoplenet.routeanalyzer.maze.model.MazeSolutionRequest;
import com.peoplenet.routeanalyzer.maze.model.MazeSolutionResponse;
import com.peoplenet.routeanalyzer.maze.service.MazeSolutionService;

@RestController
public class MainController {
	
	@Autowired
	MazeSolutionService mazeSolutionService;
		
	@RequestMapping(value = "/api/getShortestPath/v1")
	public @ResponseBody MazeSolutionResponse getShortestPath(
			@RequestBody char[][]  input) {
		/*for(char[] row : input) {
			System.out.println("");
			for (char el: row) {
				System.out.print(el);
			}
		}*/
		MazeSolutionRequest request = new MazeSolutionRequest();
		request.setInputMaze(input);
		MazeSolutionResponse response = mazeSolutionService.getShortestPath(request);
		
		return response;
	}
}
