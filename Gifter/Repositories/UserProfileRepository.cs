using Gifter.Data;
using Gifter.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Repositories
{
    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly ApplicationDbContext _context;
        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<UserProfile> GetAll()
        {
            return _context.UserProfile
                .Include(p => p.Posts)                
                .ToList();
        }

        public UserProfile GetById(int id)
        {
            return _context.UserProfile
                .Include(p => p.Posts)
                .FirstOrDefault(profile => profile.Id == id);
        }

        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }

        public void Update(UserProfile userProfile)
        {
            _context.Entry(userProfile).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.UserProfile
                    .FirstOrDefault(up => up.FirebaseId == firebaseUserId);
        }

        public void Delete(int id)
        {
            var user = GetById(id);
            _context.UserProfile.Remove(user);
            _context.SaveChanges();
        }
    }
}
