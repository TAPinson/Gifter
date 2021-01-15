using Gifter.Data;
using Gifter.Models;
using Gifter.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly UserProfileRepository _userProfileRepository;
        public UserProfileController(ApplicationDbContext context)
        {
            _userProfileRepository = new UserProfileRepository(context);
        }
        //private IUserProfileRepository _userProfileRepository;

        //public UserProfileController(IUserProfileRepository userProfileRepository)
        //{
        //    _userProfileRepository = userProfileRepository;

        //}

        public IActionResult Get()
        {
            return Ok(_userProfileRepository.GetAll());
        }

        //[HttpGet("{id}")]
        //public IActionResult Get(int id)
        //{
        //    var profile = _userProfileRepository.GetById(id);
        //    if (profile == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(profile);
        //}

        //[HttpPost]
        //public IActionResult Post(UserProfile userProfile)
        //{
        //    _userProfileRepository.Add(userProfile);
        //    return CreatedAtAction("Get", new { id = userProfile.Id }, userProfile);
        //}

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetUserProfile(string firebaseUserId)
        {
            return Ok(_userProfileRepository.GetByFirebaseUserId(firebaseUserId));
        }

        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            userProfile.DateCreated = DateTime.Now;
            _userProfileRepository.Add(userProfile);
            return Ok(userProfile);
        }

        //[HttpPut("{id}")]
        //public IActionResult Put(int id, UserProfile userProfile)
        //{
        //    if (id != userProfile.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _userProfileRepository.Update(userProfile);
        //    return NoContent();
        //}

        //[HttpDelete("{id}")]
        //public IActionResult Delete(int id)
        //{
        //    _userProfileRepository.Delete(id);
        //    return NoContent();
        //}

    }
}
